<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobranie danych z formularza
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Sprawdzenie poprawności danych
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Błąd: Wypełnij poprawnie wszystkie pola.";
        exit;
    }

    // Adres e-mail, na który zostanie wysłana wiadomość
    $to = "tatiana@relowave";
    $email_subject = "=?UTF-8?B?" . base64_encode("Formularz kontaktowy: $name") . "?=";
    $email_body = "Imie i Nazwisko: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Wiadomosc:\n$message\n";

    // Nagłówki e-maila z obsługą polskich znaków
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";

    // Wysyłka e-maila
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "OK"; // Zwróci "OK", co pozwoli na poprawne wyświetlenie wiadomości w HTML
    } else {
        echo "Błąd: Wiadomość nie mogła zostać wysłana.";
    }
}
?>

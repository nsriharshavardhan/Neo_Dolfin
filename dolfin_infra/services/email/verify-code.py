import random
import string
import smtplib

def generate_code(length=6):
    """Generate a random string of letters and digits."""
    chars = string.ascii_letters + string.digits
    return ''.join(random.choice(chars) for _ in range(length))

def send_email(receiver_email, code):
    """Send an email with the generated code."""
    sender_email = "dolfin.fintech@gmail.com"
    password = "dolfin2023@deakin!"
    message = f"Subject: Verification Code\n\nYour verification code is {code}"

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)

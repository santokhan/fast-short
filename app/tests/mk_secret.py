import secrets


def generate_secret_key(length=32):
    return secrets.token_hex(length)


# Example usage
key = generate_secret_key()
print(f"Secret key: {key}")

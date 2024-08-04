import hashlib
from datetime import datetime


def do_hash(original_url: str) -> str:
    """
    Create a unique short key based on the hash of the URL
    For public and unauthorized URLs
    """
    short_key = hashlib.md5(original_url.encode()).hexdigest()[:6]
    return short_key


def do_unique_hash(original_url: str, author_email: str) -> str:
    """
    Create a unique short key based on the hash of the URL
    For authorized users with email
    """
    now = datetime.now()
    make_unique = original_url + author_email + str(now)
    # hash = hashlib.md5(original_url.encode()).hexdigest()[:6]
    hash = hashlib.md5(make_unique.encode()).hexdigest()[:6]
    return hash

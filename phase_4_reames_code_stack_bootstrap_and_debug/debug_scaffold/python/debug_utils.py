import traceback

def debug_wrap(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            print(f"[PY/DEBUG] Error in {{func.__name__}}: {{e}}")
            traceback.print_exc()
            return None
    return wrapper
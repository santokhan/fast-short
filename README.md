## Fast Short API

I've observed that the `async`/`await` mechanism behaves differently in Python compared to JavaScript. For instance:

```python
json_data = [doc async for doc in docs]
```

In Python, this construct uses `async for` to iterate asynchronously over `docs`, capturing `doc` objects as they're retrieved.
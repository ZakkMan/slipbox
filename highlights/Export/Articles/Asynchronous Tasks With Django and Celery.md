- **Type:** #[[__ 🟦  Reference Note]] | [[Python]] [[Django]]
- **Source:** https://realpython.com/asynchronous-tasks-with-django-and-celery/
- **Author:**  [[Real Python]]
- **Summary:** 
- **Highlights:**
    - How to integrate Celery into a Django Project and create Periodic Tasks.
    - What is Celery?
        - “[Celery](http://www.celeryproject.org/) is an asynchronous task queue/job queue based on distributed message passing. It is focused on real-time operation, but supports scheduling as well.”
        - Why is this useful?
        - Think of all the times you have had to run a certain task in the future. Perhaps [you needed to access an API](https://realpython.com/api-integration-in-python/) every hour. Or maybe you needed to [send a batch of emails](https://realpython.com/python-send-email/) at the end of the day. Large or small, Celery makes scheduling such periodic tasks easy.
        - You never want end users to have to wait unnecessarily for pages to load or actions to complete. If a long process is part of your application’s workflow, you can use Celery to execute that process in the background, as resources become available, so that your application can continue to respond to client requests.
    - Setup
        - `pip install celery`
        - Now we can integrate Celery into our Django Project in just three easy steps.
        - Step 1: Add celery.py
            - Create a new file called celery.py
        - Step 2: Import your new Celery app
            - To ensure that the Celery app is loaded when Django starts, add the following code into the __init__.py file that sits next to your settings.py file:
        - Step 3: Install Redis as a Celery “Broker”
            - Celery uses “[brokers](http://celery.readthedocs.org/en/latest/getting-started/brokers/)” to pass messages between a Django Project and the Celery [workers](http://celery.readthedocs.org/en/latest/userguide/workers.html). In this tutorial, we will use [Redis](https://realpython.com/caching-in-django-with-redis/[[what-is-redis]]) as the message broker.
            - First, install [Redis](http://redis.io/) from the official download [page](http://redis.io/download) or via brew (brew install redis) and then turn to your terminal, in a new terminal window, fire up the server:
            - You also need to add Redis as a dependency in the Django Project:
        - That’s it! You should now be able to use Celery with Django. For more information on setting up Celery with Django, please check out the official Celery [documentation](http://docs.celeryproject.org/en/latest/django/first-steps-with-django.html#using-celery-with-django).
        - Test that the Celery worker is ready to receive tasks
    - Celery Tasks
    - Celery utilizes [tasks](http://celery.readthedocs.org/en/latest/userguide/tasks.html), which can be thought of as regular Python functions that are called with Celery.
    - Back to the Django Project
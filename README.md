## Technologies Used

- Gitpod
- Flask-SQLAlchemy
- psycopg2
- Materialize Css

## 

This application is used to store sensitive information and it is very crucial to store this information on a `env.py` file and include this on your `.gitignore`

```
touch env.py
```

## Creating the Database

### Migrate Your DB from Python

open your Python interpreter `python3`

- >>> from taskmanager import db
- >>> db.create_all()
- >>> exit() 

## Template Inheritence

What is it?
- parent and Child HTML templates

What does it do?
- The child template inherits HTML code from the parent template. This follows the philosphy of 'DRY' - `Don't Repeat Yourself` as templating helps avoid duplication

How do you use it?
- You use jinja blocks to inject content
```
{% block content %}
*Insert content here*
{% endblock %}
```

We will be using the `Materialize Css`

- Navigate to [Materialize css: Getting Started](https://materializecss.com/getting-started.html) and grab the cdn & paste it into the `<head></head>`
```
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

- Then paste the Javascript cdn at the bottom of the `html` document

```
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

## Add New Category Function to DB using Python

This is really easy to do and we need to create them creating `add_category.html` and `categories.html`

### add_category.html Routes and File Structure

### categories.html Routes and File Structure

To add our new Category, we need to 

### Including our owned JS and CSS files

We need to use the `{{ url_for }}` method when adding directories to our owned style and script files, they are not needed for `cdn` links

When using the `Flask` library, we need to create a `static` folder in our created `module` which in this tutorial is called `taskmanager`

In our `static` folder we created our directories to `css` and `js`, then we need to import them to our `base.html` like this:

```
<!-- CSS -->
<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css')}}" type="text/css">

<!-- JavaScript -->
<script src="{{ url_for('static', filename='js/script.js') }}" type="text/js"></script>
```

This helps avoid bugs when directing our site to our needed paths

## Credits

- Materialize css (https://materializecss.com/getting-started.html)
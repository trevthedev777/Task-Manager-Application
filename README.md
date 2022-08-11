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

## CREATE New Category Function to DB using Python

-   WHAT IS IT?
    - A button called Add Category and function called add_category().

- WHAT DOES IT DO?

    - When a user clicks the Add Category button, the add_category() function will run. This function will provide the user with a form to save a new category to the database.

- HOW DO YOU USE IT?
    - You create your add_category() function in the routes.py and wire this up to your Add Category button.

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

## Viewing Categories - READ from Database

- WHAT IS IT?
    - A template called Categories and a function called categories().

- WHAT DOES IT DO?
    - Allows users to query the database and view all categories.

- HOW DO YOU USE IT?
    - Clicking on the navbar link for Categories will execute the function, and retrieve a list of all categories to display to the user on the front-end

## UPDATING Categories

- WHAT IS IT?
    - A button called 'Edit' and a function called edit_category().

- WHAT DOES IT DO?
    - When a user clicks the 'Edit' button on the form, the edit_category() function will run. This will update the Category text in the Database.

- HOW DO YOU USE IT?
    - You create your edit_category() function in routes.py and wire this up to your Edit button.
    

<!-- FINISH DOCUMENTATION, rewatch and add notes for this here-->

## Deleting Categories

- WHAT IS IT?
    - A button called 'Delete' and a function called delete_category().

- WHAT DOES IT DO?
    - When a user clicks the 'Delete' button, the delete_category() function will run, which will delete the category from the database.
    
- HOW DO YOU USE IT?
    - You create your delete_category() function in routes.py and wire this up to your 'Delete' button on the front-end template.


Deleting a category does nit require a `.html` and is all done through the backend `routes.py` file.

1) Create a route and and create a function that will parse the`<int:category_id>` into our directory that is parsed as the argument, this is to let us make changes or delete the task that we select
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
```

2) We should attempt to query the category table by using this `id`, if there isn's a id found then it should automatically return a 404 page
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category - Category.query.get_or_404(category_id)
```

3) using the db session, we need to use the `delete` method to remove this query from our `db` and then commit the session
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category - Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
```

4) Once that has been deleted and the changes committed to our `db`, we can redirect our user back to the directory of `categories`
```
@app.route("delete_category/<int:category_id></int:category.id>")
def delete_category(category_id):
    category = Category.query.get_or_404(category_id)
    db.session.delete(category)
    db.session.commit()
    return redirect(url_for("categories"))
```

5) Last step, update the `href` link from the `categories` template
```
<div class="card-action">
          <a href="{{ url_for('edit_category', category_id=category.id) }}" class="btn green accent-4">Edit</a>
          <a href="{{ url_for('delete_category', category_id=category.id) }}" class="btn red">Delete</a>
</div>
```
Add defensive programming on your delete function euther using validations or modals
## Credits

- Materialize css (https://materializecss.com/getting-started.html)
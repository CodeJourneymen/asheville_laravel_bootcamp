Command-Shift-. to regenerate laravel helper file for PHPStorm.

(git co main)

https://ashe_laravelbootcamp.lndo.site/



(git co 1_breeze)

lando composer require laravel/breeze --dev

lando artisan breeze:install blade

lando npm install

lando npm run dev

https://ashe_laravelbootcamp.lndo.site/ </br>
and register an account.</br>
Show users in SqLite DB database/database.sqlite

Show vite.</br>
https://ashe_laravelbootcamp.lndo.site/register</br>
Look up register route - explain how routes and named routes work.</br>
routes/web.php - includes routes/auth.php</br>
register points to `[RegisteredUserController::class, 'create']` <br/>
which shows    `return view('auth.register');`<br/>

`routes/auth/register.blade.php`</br>
Add some random text and show the vite hot module reloading working.<br/>
This is NOT page reload like BrowserSync. Lando also supports browsersync too.


Show dashboard after logged in.<br/>
Can show routes/views and how to look them up.


https://bootcamp.laravel.com/blade/creating-chirps


(git co 2_creating_chirps)

Models, migrations, and controllers

`lando artisan make:model -mrc Chirp`<br>
-mrc m=migration,  rc=resource controller.

Resource controller explanation.

Actions Handled by Resource Controllers

| Verb      | URI                  | Action  | Route Name     |
|-----------|----------------------|---------|----------------|
| GET	      | /photos	             | index   | photos.index   |
| GET	      | /photos/create	      | create  | photos.create  |
| POST	     | /photos	             | store   | photos.store   |
| GET	      | /photos/{photo}	     | show    | photos.show    |
| GET	      | /photos/{photo}/edit | edit    | photos.edit    |
| PUT/PATCH | /photos/{photo}	     | update  | photos.update  |
| DELETE    | /photos/{photo}	     | destroy | photos.destroy |

https://laravel.com/docs/11.x/controllers#resource-controllers

7 actions in a resource controller.
Add the route to routes/web.php

explain named middleware for :-

```php
Route::resource('chirps', ChirpController::class)
->only(['index', 'store'])
->middleware(['auth', 'verified'])
```

https://laravel.com/docs/11.x/middleware#middleware-aliases

./vendor/laravel/framework/src/Illuminate\Auth\Middleware\Authenticate<br/>
./vendor/laravel/framework/src/Illuminate\Auth\Middleware\EnsureEmailIsVerified</br>

This creates 2 routes for index and store.

lando artisan route:list --path=chirps




# Build Instruction

1. Run "npm install" to install all the depencies inside book-shlef project
2. "ng build --prod" to build the package
3. "ng serve" to test the changes without service worker.

PWA implemented using service workers. to verify the PWA, Please follow

1. "npm install -g angular-http-server" to install http-server
2. Run "angular-http-server" command inside /dist/book-shelf folder where index.html exist

# Unit tesing and Test Coverage

$ ng test
$ ng test --code-coverage

# Features list

1. Display all the available books with sorting and filter option
2. Sorting options available based on author or release date or number of pages
3. When inputing filter option, display the books only when number of pages match with filtered input.

# Assumption

1. Filter will be applied only blur or submit button after inputing number of pages
2. Sort option works when we click radio button
3. Assuming books list will grow, implemnted lazyload image directive to load images by view port (scroll)
4. Assuming, we will add more features like profile, checkout , cart, created sepearte book module and lazy loading it for book-shelf route
5. Used service worker to cache html,css, js and images.
6. Assuming fetching list of books api response is not going to change frequently, caching it using service worker.
7. Assuming release date will be mm/yyyy in this format, implemneted sorting logic by creating date mm/yyyy.
8. Implemented sorting logic using whole name for author option.
9. To improve the performance, once sorted added the value to object and will fetch the value from object instead of computing sorting.
10. Updated backend Service with cors.
11. Added proxy as Backend server and angular application will be in diff port locally.
12. Implemented trackByFunction for booksitems in book component based on link assuming it will be unique foer everybook Or if we update backend server response add id for every item, we can use item id

## Technologies Stack

Angular, CSS Flexbox , RxJs and NgRx store(Action, Selector, Reducer, Effect).

# Browser Supported

App runs in all the major browsers except lazyloading image feature which was done to improve the performance. As lazyloading image implemented using Intersection_Observer_API and its not supported by Internet Browser, firefox and few other browsers.

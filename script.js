/* =========================================================
   PAGE NAVIGATION
   ========================================================= */


/*
    This function is called when the user clicks
    one of the navigation buttons or the power logo.

    The function receives the name of the HTML page
    that we want to open.

    For example:

        goToPage('index.html');

    or:

        goToPage('televisions.html');
*/


function goToPage(page) {


    /*
        window.location.href tells the browser to
        navigate to another webpage.

        "page" contains the filename that was passed
        into the function.

        For example:

        page = "televisions.html"

        means the browser will open:

        televisions.html
    */

    window.location.href = page;

}



/* =========================================================
   CURRENT PAGE FEEDBACK
   ========================================================= */


/*
    This code runs after the webpage has finished loading.

    DOMContentLoaded means:

    "Wait until the HTML document has loaded,
    then run this code."
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
            window.location.pathname gives us the
            current webpage address.

            We use split("/") to separate the folders
            and filename.

            pop() gets the last part.

            Example:

            /COS30045/televisions.html

            becomes:

            televisions.html
        */


        let currentPage =
            window.location.pathname
                .split("/")
                .pop();



        /*
            If the browser does not give us a filename,
            we assume the user is on the Home page.

            This is useful because sometimes the Home page
            may be opened simply as:

                /COS30045/

            instead of:

                /COS30045/index.html
        */


        if (currentPage === "") {

            currentPage = "index.html";

        }



        /*
            This finds all elements that have:

                class="nav-link"

            In our website, these are the three
            navigation buttons.
        */


        const navigationLinks =
            document.querySelectorAll(".nav-link");



        /*
            forEach() means:

            "Do something for every navigation button."

            So the following code will run once for:

                Home
                Televisions
                About Us
        */


        navigationLinks.forEach(
            function (link) {


                /*
                    Gets the onclick attribute from
                    the current navigation button.

                    For example, a button might contain:

                    onclick="goToPage('about.html')"
                */


                const destination =
                    link.getAttribute("onclick");



                /*
                    Check whether the navigation button
                    points to the page we are currently on.

                    For example:

                    currentPage = "about.html"

                    and the button contains:

                    goToPage('about.html')

                    Therefore, this condition is true.
                */


                if (
                    destination &&
                    destination.includes(currentPage)
                ) {


                    /*
                        Adds the "active" CSS class
                        to the current page button.

                        CSS then changes that button
                        to yellow.

                        This gives the user feedback about
                        which page they are currently viewing.
                    */


                    link.classList.add("active");

                }

            }
        );

    }
);
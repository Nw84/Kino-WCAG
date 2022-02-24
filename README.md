# kino-ytterhogdal

Basic description of API on localhost:5080

Screenings on startpage
    •	/api/screeningtime
    •	Method = GET

Screenings on Moviepage
    •	/api/movies/:movieId/screeningtime
    •	Method = GET
        :movieId - identifier for which movie to filter

Reviews on Moviepage

    •	/api/movies/:movieId/reviews/:reviewPageId
    •	Method = GET
        :movieId - identifier for which movie to filter
        :reviewPageId - identifier for review page with 5 reviews

    •	/api/movies/:movieId/reviews
    •	Method = POST
        :movieId - identifier for which movie to filter

        Body: 	
            data: {
                    author: req.body.name,
                    comment: req.body.comment,
                    rating: req.body.rating,
                    movie: req.params.movieId,
                }

Ratings on Moviepage 
    User rating for more than 5 reviews or imdb rating for less than 5
    •	/api/movies/:movieId/ratings
    •	Method = GET
        :movieId - identifier for which movie to filter

<---------------------------------------------------------------------------------------------------->

Workprocess in our group
- Active group members - Tobias Nordwall, Emma Amberdal, Marta Todorovic, Simon Ljungström, Mats Hemå
- Dayly meetings in discord
    - discussing the asignment and how to adress them
    - planing which assignments each group member can/wants to adress
    - checking progress in group
    - helping eachother if someone is stuck and using live share in VSC to colaborate
    - planing next step
- Shared repository on github, basic project with each assignment as an issue on canban
    - when a assignment is solved, each member creates a pull request which two groupmember should aprove before merge
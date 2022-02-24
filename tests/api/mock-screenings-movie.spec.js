import { getScreeningsMovie } from "../../src/script/loadScreening.js";

// mocked data from - https://lernia-kino-cms.herokuapp.com/api/screenings?populate=movie&pagination[pageSize]=100&filters[movie]=2
const api = {
    async loadScreeningsMovie() {
        return [
            {
                "id": 12,
                "attributes": {
                    "start_time": "2022-01-26T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:05.168Z",
                    "updatedAt": "2022-01-23T10:32:05.168Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 20,
                "attributes": {
                    "start_time": "2022-01-28T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:09.591Z",
                    "updatedAt": "2022-01-23T10:32:09.591Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 23,
                "attributes": {
                    "start_time": "2022-01-29T19:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:11.239Z",
                    "updatedAt": "2022-01-23T10:32:11.239Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 25,
                "attributes": {
                    "start_time": "2022-01-30T12:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:12.316Z",
                    "updatedAt": "2022-01-23T10:32:12.316Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 26,
                "attributes": {
                    "start_time": "2022-01-30T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:12.918Z",
                    "updatedAt": "2022-01-23T10:32:12.918Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 28,
                "attributes": {
                    "start_time": "2022-01-30T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:14.039Z",
                    "updatedAt": "2022-01-23T10:32:14.039Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 30,
                "attributes": {
                    "start_time": "2022-01-31T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:15.220Z",
                    "updatedAt": "2022-01-23T10:32:15.220Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 32,
                "attributes": {
                    "start_time": "2022-01-31T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:16.822Z",
                    "updatedAt": "2022-01-23T10:32:16.822Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 36,
                "attributes": {
                    "start_time": "2022-02-01T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:19.051Z",
                    "updatedAt": "2022-01-23T10:32:19.051Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 38,
                "attributes": {
                    "start_time": "2022-02-02T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:20.188Z",
                    "updatedAt": "2022-01-23T10:32:20.188Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 43,
                "attributes": {
                    "start_time": "2022-02-03T19:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:22.955Z",
                    "updatedAt": "2022-01-23T10:32:22.955Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 70,
                "attributes": {
                    "start_time": "2022-02-10T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:39.247Z",
                    "updatedAt": "2022-01-23T10:32:39.247Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 74,
                "attributes": {
                    "start_time": "2022-02-11T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:41.527Z",
                    "updatedAt": "2022-01-23T10:32:41.527Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 80,
                "attributes": {
                    "start_time": "2022-02-12T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-23T10:32:45.313Z",
                    "updatedAt": "2022-01-23T10:32:45.313Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 86,
                "attributes": {
                    "start_time": "2022-02-02T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:09:51.275Z",
                    "updatedAt": "2022-01-31T15:09:51.275Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 106,
                "attributes": {
                    "start_time": "2022-02-07T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:00.421Z",
                    "updatedAt": "2022-01-31T15:10:00.421Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 107,
                "attributes": {
                    "start_time": "2022-02-07T19:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:00.862Z",
                    "updatedAt": "2022-01-31T15:10:00.862Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 108,
                "attributes": {
                    "start_time": "2022-02-07T21:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:01.327Z",
                    "updatedAt": "2022-01-31T15:10:01.327Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 113,
                "attributes": {
                    "start_time": "2022-02-09T12:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:03.699Z",
                    "updatedAt": "2022-01-31T15:10:03.699Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 114,
                "attributes": {
                    "start_time": "2022-02-09T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:04.145Z",
                    "updatedAt": "2022-01-31T15:10:04.145Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 119,
                "attributes": {
                    "start_time": "2022-02-10T19:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:06.595Z",
                    "updatedAt": "2022-01-31T15:10:06.595Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 138,
                "attributes": {
                    "start_time": "2022-02-15T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:15.385Z",
                    "updatedAt": "2022-01-31T15:10:15.385Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 146,
                "attributes": {
                    "start_time": "2022-02-17T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:19.007Z",
                    "updatedAt": "2022-01-31T15:10:19.007Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 149,
                "attributes": {
                    "start_time": "2022-02-18T12:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:20.405Z",
                    "updatedAt": "2022-01-31T15:10:20.405Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 154,
                "attributes": {
                    "start_time": "2022-02-19T17:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:22.861Z",
                    "updatedAt": "2022-01-31T15:10:22.861Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 159,
                "attributes": {
                    "start_time": "2022-02-20T19:00:00.000Z",
                    "room": "Stora salongen",
                    "createdAt": "2022-01-31T15:10:25.214Z",
                    "updatedAt": "2022-01-31T15:10:25.214Z",
                    "movie": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "title": "The Godfather",
                                "imdbId": "tt0068646",
                                "intro": "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
                                "image": {
                                    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                                },
                                "createdAt": "2022-01-17T04:59:42.763Z",
                                "updatedAt": "2022-01-18T08:47:25.840Z",
                                "publishedAt": "2022-01-17T04:59:44.929Z"
                            }
                        }
                    }
                }
            }
        ]
    }
};

test("Recieved data contains right format", async () => {
    const payload = await getScreeningsMovie(api);

    expect(payload.data.length).toBeGreaterThanOrEqual(1);
    expect(payload.data[0].title).toBeTruthy();
    expect(payload.data[0].room).toBeTruthy();
    expect(payload.data[0].time).toBeTruthy();
});

test("Received screening time is in future", async () => {
    const payload = await getScreeningsMovie(api);
    const now = new Date;
    
    payload.data.forEach(screening => {
        const screeningTime = new Date(screening.time);
        expect(screeningTime > now).toBeTruthy();
    });
});
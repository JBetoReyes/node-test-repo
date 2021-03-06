const BaseRouter = require('./baseRouter');

module.exports = class PostsRouter extends BaseRouter {

    getPosts() {
        return {
            path: '/posts',
            method: 'get',
            handler: (req, res) => {
                res.json([
                    {
                      "id": 1,
                      "title": "The waves are high & beautiful",
                      "category": "travel",
                      "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
                      "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
                      "publishedAt": "2015-03-15T08:40:51.620Z",
                      "image": "https://source.unsplash.com/weekly?nature",
                      "comments": [
                        {
                          "id": 1,
                          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                          "author": "Joe Doe"
                        },
                        {
                          "id": "2",
                          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                          "author": "John Cena"
                        },
                        {
                          "id": "3",
                          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                          "author": "Joe Doe"
                        }
                      ]
                    },
                    {
                      "id": 2,
                      "title": "At the beach in winter",
                      "category": "lifestyle",
                      "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
                      "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
                      "publishedAt": "2015-03-15T08:40:51.620Z",
                      "image": "https://source.unsplash.com/weekly?beach",
                      "comments": []
                    },
                    {
                      "id": 3,
                      "title": "The Edge of Nothing Lake",
                      "category": "business",
                      "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
                      "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
                      "publishedAt": "2015-03-15T08:40:51.620Z",
                      "image": "https://source.unsplash.com/random",
                      "comments": [
                        {
                          "id": 1,
                          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                          "author": "Joe Doe"
                        }
                      ]
                    },
                    {
                      "id": 4,
                      "title": "Five Hundred Twenty",
                      "category": "travel",
                      "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
                      "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
                      "publishedAt": "2015-03-15T08:40:51.620Z",
                      "image": "https://source.unsplash.com/collection/540518/likes/",
                      "comments": [
                        {
                          "id": 1,
                          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                          "author": "Joe Doe"
                        }
                      ]
                    }
                  ]);
            }
        }
    }

    createPosts() {
      return {
        method: 'post',
        path: '/posts',
        handler: (req, res) => {
          res.json({
            "id": 99,
            "title": "The waves are high & beautiful",
            "category": "travel",
            "comments": 21,
            "published_at": "2015-08-05T08:40:51.620Z",
            "short_description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget."
          });
        }
      }
    }

    getPostsById(){
      return {
        path: '/posts/:id',
        method: 'get',
        handler: (req, res) => {
          res.json({
            "id": 1,
            "title": "The waves are high & beautiful",
            "category": "travel",
            "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
            "publishedAt": "2015-03-15T08:40:51.620Z",
            "image": "https://source.unsplash.com/random",
            "comments": [
              {
                "id": 1,
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "Joe Doe"
              },
              {
                "id": "2",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "John Cena"
              },
              {
                "id": "3",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "Joe Doe"
              }
            ]
          });
        }
      }
    }

    editPosts() {
      return {
        path: '/posts/:id',
        method: 'put',
        handler: (req, res) => {
          res.json({
            "id": 1,
            "title": "The waves are high & beautiful",
            "category": "travel",
            "shortDescription": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella",
            "description": "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. <br> Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. <br> Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.",
            "publishedAt": "2015-03-15T08:40:51.620Z",
            "image": "https://source.unsplash.com/random",
            "comments": [
              {
                "id": 1,
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "Joe Doe"
              },
              {
                "id": "2",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "John Cena"
              },
              {
                "id": "3",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "author": "Joe Doe"
              }
            ]
          });
        }
      }
    }

    deletePosts() {
      return {
        path: '/posts/:id',
        method: 'delete',
        handler: (req, res) => {
          res.status(204).end();
        }
      }
    }

}

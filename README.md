# Cars Web Dev Test

# Cars API

## The Story

```
"As a consumer of a RESTFul API, I would like to be able to add, retrieve, and remove *cars*."
```

### The Acceptance Criteria

* Priority order is:
    1. add
    2. retrieve 
    3. remove
* A *car* has the following attributes:
    * id*
    * make
    * model
    * colour
    * year
* We do not require persistent storage at this stage (an in-memory store is fine).

*generated by the application on entry

## Subsequent stories

These are stretch goals if you have time (you can do them in any order):

* "As a Developer, I want my code to be covered by tests, so I know if a change has broken something"
* "As a Consumer of the API, when reading the car model information I would like to see an additional field containing a string of a few words that sound like the model of the cars I have added" (using [http://www.datamuse.com/api/](http://www.datamuse.com/api/) as the source).
* "As a Consumer of the API, I would like to be able to update my existing cars"
* "As a Consumer of the API, I would like any cars I add through the API to persist between application restarts (persistent storage)"
* "As a Consumer of the API, I would like cars to be represented as two separate, hierarchically linked resources: 
    1. *Make*
    1. *Model*

## Limitations

You can use whatever online resources you want (aside from copy-pasting large chunks of code).

You are encouraged to use any frameworks or libraries you feel comfortable with.

You will be asked about the code you submit so you should be able to explain why every line is there.

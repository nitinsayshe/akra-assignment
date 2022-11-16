# You can run the project in local

0. npm i
1. npm start
2. need postman 
    1. get localhost:3000/   ------get the all user
    2. get localhost:3000/search     --- get result based on request body. 
        ex.{
            "name": "col",
            "phone": "1"
        }
    3. get localhost:3000/findone     ----
    ex.{
        "name": "Jaime Cooper"
        }
    4. get localhost:3000/:page  --get data by page









# Backend Test Task

0. Download the Attached `sample_user_data.csv` file, This is your Data source
1. You can Either Seed this into the DB of your choice or Convert it into JSON and use that

# Requirments

From the Attached Seed Data Create a **CRUD** API End Point With the
Transport Layer(HTTP,WS,MQTT...) or the underlying Architecture(REST, GraphQl, RPC...)
of your choice (Being Fancy Gives you Extra Points)

### R Read API is the Main Focus (MANDATORY)

1. You need to implement a `Find ALL` with Pagination Support (Either Offset Based or Cursor Based)
2. Doing pagination Manually Gives you Extra points
3. Implement a `Find One` with the Ability to Search all the Columns
4. Implement a `Fuzzy Search` For the Name, Phone Column

#### NOTE:

- If You're Going to Use HTTP & REST OpenAPI 3.0(swagger) Documentation Is a **MUST**.
- For GraphQL an Appropriate GraphQL Schema should be given

- Using Typescript Is an Extra 1 point
- Implementing TDD is an extra 2 point

#### Evaluation:

Evaluation is Mainly Based on the Architecture Design,Thought Process, and Elegancy of the Solution Provided 


# Submission
- Fork this repo and start your work over it 
- Make a PR once your done and we'll get back
- Show off you're GitJutsu (Commit convections, Hooks , Branch Naming etc)


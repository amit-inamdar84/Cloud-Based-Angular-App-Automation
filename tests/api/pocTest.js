const axios = require('axios');
const {expect} = require('chai');
describe("POC for Axios API Automation", function(){
    before(function(){
        axios.defaults.headers.common['Authorization'] = "Bearer "+'6dcc41d39e546f5ed2587d6d88b3381a7042a6eb';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.headers.post['accept'] = 'application/vnd.github.v3+json';
        console.log('Am I executing???');
    })
    
    it("First API test", async function(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            console.log(response.data);
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an("object").to.have.all.keys('id', 'userId','title','completed');
            expect(response.data.id).to.equal(1);
            expect(response.data.userId).to.equal(1);
            expect(response.data.title).to.equal("delectus aut autem");
            expect(response.data.completed).to.equal(false);
    })

    it("Test API Authorization", async function(){
        
        const response = await axios.post('https://api.github.com/user/repos',{
            name: "Postman API Test",
            description: "Repository for learning API authorization",
            homepage: "https://github.com",
            private: false,
            has_issues: true,
            has_projects: true,
            has_wiki: true
        },/* {
            headers: {
                'Authorization' : "Bearer "+'6dcc41d39e546f5ed2587d6d88b3381a7042a6eb'  
            }
        } */
        
        )
        expect(response.status).to.equal(201);
    })
})




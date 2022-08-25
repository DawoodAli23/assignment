const axios = require("axios");
// const fetch = require("node-fetch");
const processMessage = async (kafkaMessage) => {
    // Start working here
    if (kafkaMessage.event_name == "user_created") {
        const {
            id,
            first_name,
            last_name,
            department,
            designation,
            tenant_id,
            image_url,
            city,
            country,
            bio,
            social_links,
            employee_id,
        } = kafkaMessage.properties;
        axios
            .post("http://localhost:4000/user", {
                id,
                first_name,
                last_name,
                department,
                designation,
                tenant_id,
                image_url,
                city,
                country,
                bio,
                social_links,
                employee_id,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        const {
            name,
            address,
            city,
            state,
            country,
            zip_code,
            phone,
            web_url,
        } = kafkaMessage.properties;
        axios
            .post("http://localhost:4000/tenant", {
                name,
                address,
                city,
                state,
                country,
                zip_code,
                phone,
                web_url,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log("=====>", kafkaMessage);
};

module.exports = processMessage;

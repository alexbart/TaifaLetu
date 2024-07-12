export async function GET(request) {
    const posts = [
        {
            id: 1,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 2,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 3,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 4,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 5,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        }
    ];

    return new Response(JSON.stringify(posts));
}
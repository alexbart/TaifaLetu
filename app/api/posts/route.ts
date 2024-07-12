export async function GET(request) {
    const posts = [
        {
            id: 1,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "Sint fugiat ipsum esse ad. Nostrud non anim ut pariatur ex amet exercitation consequat sint nisi. Nostrud reprehenderit labore velit excepteur officia nisi veniam aliqua et commodo. Reprehenderit consequat consequat nisi consectetur eu proident officia cupidatat velit eu laboris laborum aute. Proident occaecat ipsum non nulla duis eu dolor sint exercitation ut dolor est. Veniam id nostrud ut ullamco sit sint incididunt. Ad deserunt aliquip in velit nisi.",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 2,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "Minim esse enim do pariatur est minim dolore consequat sint. Tempor aliqua sit magna deserunt cupidatat esse aute cillum ut eu. Magna dolor veniam do deserunt proident id ex sit aliqua ad amet dolore. Enim laboris nostrud esse ea qui duis dolor nostrud tempor. Nostrud laboris occaecat id qui adipisicing. Enim nisi minim Lorem occaecat dolor elit nostrud duis qui ea.",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 3,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "Dolore ad cillum irure ut magna qui ullamco. Irure id adipisicing laborum dolore consequat culpa labore tempor enim ex. Do dolor enim voluptate mollit aliqua veniam amet irure culpa tempor deserunt nostrud consectetur deserunt.",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 4,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "Veniam voluptate ea nisi magna velit reprehenderit deserunt eu esse laboris exercitation cupidatat dolor. Voluptate velit non dolore velit Lorem nulla occaecat consequat dolore. Laborum in officia excepteur Lorem deserunt tempor sint sint aliquip quis ullamco nostrud pariatur dolor. Cillum quis ex velit labore do laborum exercitation sint incididunt. Minim laboris sit anim nisi. Veniam est velit veniam magna esse eiusmod id. Aliquip consectetur aliqua sit esse anim deserunt.",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        },
        {
            id: 5,
            title: "Rougue cop kills a Peaceful Protester in Nairobi CBD",
            details: "Dolore dolor officia proident mollit ea nulla aliqua reprehenderit Lorem deserunt nisi consectetur excepteur proident. Velit ex ipsum laboris Lorem sunt non duis ullamco ex commodo irure qui laborum enim. Enim non pariatur pariatur consectetur enim ex cupidatat do qui anim. In duis elit quis ullamco culpa ipsum mollit proident ea eu ullamco ut.",
            userId: 123,
            datePosted: "2015-03-25",
            dateOfIncident: "2015-03-25"
        }
    ];

    return new Response(JSON.stringify(posts));
}
export async function GET(request) {
    const post = {
        id: 1,
        title: "Rogue cop kills a Peaceful Protester in Nairobi CBD",
        details: "Sint fugiat ipsum esse ad. Nostrud non anim ut pariatur ex amet exercitation consequat sint nisi. Nostrud reprehenderit labore velit excepteur officia nisi veniam aliqua et commodo. Reprehenderit consequat consequat nisi consectetur eu proident officia cupidatat velit eu laboris laborum aute. Proident occaecat ipsum non nulla duis eu dolor sint exercitation ut dolor est. Veniam id nostrud ut ullamco sit sint incididunt. Ad deserunt aliquip in velit nisi.",
        userId: 123,
        datePosted: "2015-03-25",
        dateOfIncident: "2015-03-25"
    }

    return new Response(JSON.stringify(post));
}
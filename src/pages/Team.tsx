import { Heading } from "@chakra-ui/react";

export default function Team() {
    return (
        <div>
            <div className="column">
                <Heading>Charlotte Barber</Heading>
                <p>IMAGE</p>
                <Heading>Owner</Heading>
                <p>With over six years of professional experience and personal experience, She opened her own business
                    to promote a more sustainable way of living by using effective, natural products & practicing what
                    she preaches. When she is not working, you can find her working in her garden & spending time with
                    her family.</p>
            </div>
            <div className="column">
                <Heading>Paisley Barber</Heading>
                <p>IMAGE</p>
                <Heading>Lead House Cleaner</Heading>
                <p>Proven hard worker and highly detail-oriented, Ella provides high-quality service to every space.
                    Always with a smile. Ella, when not working, loves playing competitive Volleyball. She'd be happy
                    to clean your space over the summer.</p>
            </div>
        </div>
    );
}

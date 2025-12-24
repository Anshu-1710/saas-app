import Image from "next/image";
const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Start Learning your way</div>
            <h2 className="text-3xl font-bold">Build a Personalize  Learning Companion</h2>
            <p>
                Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
            </p>
            <Image src="images/cta-image.svg" alt="CTA Image" width={362} height={232} />
        </section>
    )   
}
export default CTA
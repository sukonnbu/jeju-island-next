import Image from "next/image"

export default function OtherPlace({name, content, address}) {
    return (
        <div className="w-96 justify-center">
            <h2 className="text-2xl p-2">{name}</h2>
            <article>
                <Image src={"/제주관광지60선/"+name+".jpg"} width={380} height={380} />
                <section>
                    <p className="text-base">
                        {content}
                    </p>
                </section>
                <footer className="flex flex-col justify-between py-1">
                    <span className="px-2 text-sm">주소: {address}</span>
                </footer>
            </article>
        </div>
    )
}
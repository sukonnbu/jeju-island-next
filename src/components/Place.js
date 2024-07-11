import Image from "next/image";

export default function Place({name, content, address}) {
    return (
         <div className="w-96 justify-center" id={name}>
            <h2 className="text-2xl p-2">{name}</h2>
            <Image src={"/지도이미지/"+name+".jpg"} width={380} height={380}/>
            <article>
                <section>
                    <p className="text-base font-sans">
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
import Link from 'next/link'

export default function Post() {
    return (
        <>
        <h1>first post</h1>
        <h2>
            <Link href='/'>
                <a>Voltar ao inicio</a>
            </Link>
        </h2>
        </>
    )
}
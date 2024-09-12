export default function auth({children , access , restrict}){
    return(
        <section>
            {children}
            {
                true ? access : restrict
            }
        </section>
    )
}
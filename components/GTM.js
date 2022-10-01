function setup() {
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    
    gtag('config', 'G-RS8GPCPFCR');
}

export default function GTM() {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-RS8GPCPFCR"></script>
            <script>
                {setup()}
            </script>
        </>
    );
}

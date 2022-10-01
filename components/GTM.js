export default GTM = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-RS8GPCPFCR"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-RS8GPCPFCR');
            </script>
        </>
    );
}

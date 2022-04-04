export default function EmailSignup() {
    return (
        <div className='m-auto py-5 text-center lg:text-left lg:border lg:border-white lg:py-0' dangerouslySetInnerHTML={{ __html: mailchimpSnippet() }} />
    );
}

function mailchimpSnippet() {
    return `
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
        <form action="https://secretloft.us14.list-manage.com/subscribe/post?u=d9dcc8b8380559a2218a1e426&amp;id=6c77cd1c9d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
            <p class="hearts">Subscribe &#x1F31A;&#x1F31A;&#x1F496;</p>
            <h3>Sign up to get emails about our parties!</h3>
            <div class="mc-field-group" id="mc-field-email">
                <label for="mce-EMAIL"></label>
                <input type="email" placeholder="YOUR EMAIL" value="" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d9dcc8b8380559a2218a1e426_6c77cd1c9d" tabindex="-1" value=""></div>
                <input type="submit" value="SIGN UP!" name="subscribe" id="mc-embedded-subscribe" class="sign-up">
            </div>
        </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <!--End mc_embed_signup-->
    `;
}
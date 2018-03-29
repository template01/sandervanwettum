<template>
<!-- Begin MailChimp Signup Form -->
<div id=" mb-40">
  <!-- <p>Sign up for the newsletter:</p><br /> -->

  <div id="newsletterinner">
    <form action="https://sandervanwettum.us3.list-manage.com/subscribe/post?u=6092bbd06bcaa72ce7d9a3847&amp;id=293641fc8b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>


      <div id="mc_embed_signup_scroll">
         		<input type="email" value="Enter your email" name="EMAIL" class="required email is-underlined-index mr-10" id="mce-EMAIL" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;">
         <input type="text" value="Enter your name" name="FNAME" class="required name is-underlined-index mr-10" id="mce-FNAME" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="Aligner-item is-underlined-index submitbutton">
           <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6092bbd06bcaa72ce7d9a3847_293641fc8b" tabindex="-1" value=""></div>
      </div>

    </form>
  </div>
</div>

<!--End mc_embed_signup-->
</template>

<script>
export default {
  // components: {
  // queryresults
  // },
  // props: ['content']
}
</script>

<style scoped lang="scss">

#newsletter{
  display: inline-block;
}
#newsletterinner{
  display: flex;
}
input {
    border: 0;
    background: transparent;
    font-size: inherit;
    outline: none;
    padding: 0;
    &.email{
      max-width: 200px;
    }
}
.submitbutton {
    margin: 0;
    padding: 0;
    cursor: pointer;
}

</style>

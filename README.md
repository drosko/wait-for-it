Wait For It 
===========

Small javascript utility to wait for jquery or other libraries to load before executing functions.

The most likely use case for this is if you are using a cms which loads a library such as jQuery near the end of the body tag, and the javascript you need to execute comes before that definition (ie. in a blog post).

###How to Use

By default this utility waits for jQuery, however you can pass a string as the first argument to wait for whatever variable you want.

Default:
<pre><code>wfi(function(){
  console.log('jQuery is now defined');
});
</code></pre>

Example waiting for angular to be defined:
<pre><code>wfi('angular', function(){
  console.log('angular is now defined, do stuff');  
});</code></pre>

You can pass multiple functions, they will get called in succession:
<pre><code>wfi('angular', 
  function(){
    console.log('angular is now defined, do stuff');  
  }, 
  function(){
    console.log('do some more stuff after that');
  }
);</code></pre>

<script>
  import Pill from '../atoms/Pill.svelte';
  import H1 from '../atoms/H1.svelte';
  import Button from '../atoms/Button.svelte';
  import Icon from '../atoms/Icon.svelte';
</script>

<style>
  .custom-font {
    font-family: 'Mukta'; 
  }
  .link-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: black;
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
  }
  .link-symbol {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
  .button-container {
    display: flex;
    gap: 1rem; /* Adjust the value to increase or decrease the spacing between buttons */
  }
  .github-icon {
    color: white;
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
</style>

<div class="flex w-full flex-col gap-10 md:w-2/4">
  <div class="flex flex-col items-start gap-4">
    <Pill>Student → Manalapan High School </Pill>
    <H1>Vasudevan Govardhanen</H1>

    <p class="text-2xl font-bold text-slate-500">
      Physics and Math
    </p>
    
  </div>
  <div class="flex flex-wrap gap-5">
    <div class="button-container">
      <a class="link-box text-1xl font-bold text-slate-500" href="https://drive.google.com/drive/folders/1_ygnLa9zkUxNw0JrnqHNF8b4-uMmmTPv?usp=drive_link">
        My Work
        <span class="link-symbol">μ</span>
      </a>
      <a class="link-box text-1xl font-bold text-slate-500" href="https://medium.com/@vgovardhanen" target="_blank" rel="noreferrer">
        Blog
        <span class="link-symbol">ψ</span>
      </a>
      <a class="link-box text-1xl font-bold text-slate-500" href="https://github.com/p1npo1nt" target="_blank" rel="noreferrer">
        Github
        <span class="link-symbol"></span>
        <Icon name="github" />
      </a>
    </div>
  </div>
  <div class="flex flex-wrap gap-5">
    <Pill>vgovardhanen@gmail.com  ◆ +1 848 468 0877</Pill>
  </div>
</div>



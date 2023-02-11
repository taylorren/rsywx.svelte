<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Dropdown,
    DropdownItem,
    Chevron,
    DropdownDivider,
    DarkMode,
  } from "flowbite-svelte";
  import { Button } from "flowbite-svelte";
</script>

<div class="grow-0">
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="/images/logo.jpg"
        class="mr-3 h-6 sm:h-9"
        alt="任氏有无轩"
      />
    </NavBrand>
    <div class="flex md:order-2">
      <a href="/contact"><Button size="sm">联系站长</Button></a>
      <DarkMode />
    </div>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>主页</NavLi>
      <NavLi id="nav-menu1" class="cursor-pointer"
        ><Chevron aligned>藏书</Chevron></NavLi
      >
      <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
        <DropdownItem href="/book/title/all">总目</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
      <NavLi href="/services">读书</NavLi>
      <NavLi href="https://blog.rsywx.net" target="_blank">博客</NavLi>
      <NavLi href="http://rsywx.com" target="_blank">维客</NavLi>
    </NavUl>
  </Navbar>
</div>

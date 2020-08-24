<template>
<div class="">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 max-w-full w-auto">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <Logo />
            <span class="font-semibold text-xl tracking-tight ml-5">Nuxt Tailwind CSS</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a v-for="link in links" :href="link.href" :name="link.name" :target="link.target" :class="link.class">
                    {{ link.title }}
                </a>
            </div>
            <div>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
    </nav>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "nuxt-property-decorator"

@Component({})
export default class Navbar extends Vue {
    links = [{
            title: 'Docs',
            href: '#responsive-header',
            target: 'self',
            name: 'docs-link',
            class: 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        },
        {
            title: 'Examples',
            href: '#responsive-header',
            target: 'self',
            name: 'example-link',
            class: 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        },
        {
            title: 'Blog',
            href: '#responsive-header',
            target: 'self',
            name: 'blog-link',
            class: 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
        }
    ]
}
</script>

<style lang="scss">
</style>

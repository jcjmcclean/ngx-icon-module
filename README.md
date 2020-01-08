# ngx-icon-module

Drop in angular 5 module with icon component for using svg sprites.

**Guide to setting up SVG sprite based icons on an ngx project.**

1.  Create your SVG icons (export from Illustrator or whatever)

2.  Optimise icons using SVGO https://github.com/svg/svgo

3.  Install svg-sprite-generator
```sh
npm install -g svg-sprite-generator
```
4.  Generate your SVG sprite from a directory of SVG icons
```sh
svg-sprite-generate -d src/assets/icons -o src/assets/icon-sprite.svg
```
5.  Grab icon module from here https://github.com/jcjmcclean/ngx-icon-module and add into your project (probably under core module)
6.  Add `IconModule` in CoreModule's imports + exports
7.  Make sure you have styling setup e.g.
```css
svg-icon {
	   width: 30px;
	   height: 30px;
	   padding: 0;
	   border: none;
	   outline: none;
	   display: inline-block;
}
```

8.  Start using e.g.
```html
<svg-icon name="locale-en"></svg-icon>
```

**Resources**

https://github.com/jcjmcclean/ngx-icon-module - Icon module GitHub repo

http://varun.ca/icon-component/ - Good walkthrough similar to this one but less specific to ngx

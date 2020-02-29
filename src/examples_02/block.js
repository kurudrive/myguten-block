import { registerBlockType } from '@wordpress/blocks';
 
registerBlockType( 'gutenberg-examples/example-02-stylesheets', {
    title: 'Example: Stylesheets',
 
    icon: 'universal-access-alt',
 
    category: 'layout',
 
    example: {},
 
    edit( { className } ) {
        return <p className={ className }>Hello World, step 2 (from the editor, in green).</p>;
    },
 
    save() {
        return <p>Hello World, step 2 (from the frontend, in red).</p>;
    },
} );
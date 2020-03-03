import { registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';
 
registerBlockType( 'gutenberg-examples/post-list-server', {
    title: 'Example: Post List Server',
    icon: 'megaphone',
    category: 'widgets',
 
    edit: function( props ) {
        return (
            <ServerSideRender
                block="gutenberg-examples/post-list-server"
                attributes={ props.attributes }
            />
        );
    },

} );
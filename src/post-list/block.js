import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';
 
registerBlockType( 'gutenberg-examples/post-list', {
    title: 'Example: Post List',
    icon: 'megaphone',
    category: 'widgets',
 
    // withSelect とは別に useSelect というのがあるっぽい
    // https://github.com/inc2734/snow-monkey-editor/blob/db0b738cc851a002b5ebb79e4b1cf51f4efa5fe2/src/format/component/color-palette.js#L29

    edit: withSelect( ( select ) => {
        return {
            posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
        };
    } )( ( { posts, className } ) => {
        if ( ! posts ) {
            return 'Loading...';
        }
 
        if ( posts && posts.length === 0 ) {
            return 'No posts';
        }
 
        const post = posts[ 0 ];
 
        return <a className={ className } href={ post.link }>
            { post.title.rendered }
        </a>;
    } ),

} );
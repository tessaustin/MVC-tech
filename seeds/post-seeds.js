const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        user_id: 7
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
        user_id: 5
    },
    {
        title: 'Nunc purus.',
        post_content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        user_id: 6
    },
    {
        title: 'Pellentesque eget nunc.',
        post_content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        user_id: 2
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
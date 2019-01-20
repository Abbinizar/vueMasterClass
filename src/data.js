data {
    threads :{
        t1:{
            '.key': 't1', //post['.key']
            title:'my first threads',
            publishAt :'',
            posts: {
                p1:'p1'
            },
            userId:'u1'
        }
    },
    posts:{
        p1:{
            '.key' :'p1',
            publishAt:'',
            userId:'u1',
            text:'hi there',
            threadId:'t1'
        }
    },
    users:{
        u1:{
            name: 'alice',
            '.key':'u1',
            threads:{
                t1:'t1'
            },
            posts:{
                p1:'p1'
            }
        }
    },
    forums:{
        f1:{
            '.key':'f1',
            name:'fishing',
            description:'',
            categoryId:'c1',
            threads:{
                t1:'t1'
            }
        }
    },
    categories :{
        c1:{
            '.key':'c1',
            name: 'discussions',
            forums:{
                f1:'f1'
            }
        }
    }
}
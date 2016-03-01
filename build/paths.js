export const paths = {
  clean: './dist',
  jsServer: {
    src: ['./server/**/*.js'],
    dest: './dist/server'
  },
  jsPublic: {
    src: ['./public/scripts/**/*.js'],
    dest: './dist/public/scripts'
  },
  jade: {
    src: ['./public/views/**/*.jade'],
    dest: './dist/public/views'
  },
  sass: {
    src: ['./public/styles/**/*.scss'],
    dest: './dist/public/styles'
  }
};

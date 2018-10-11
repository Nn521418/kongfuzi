let gulp=require("gulp");
let sass=require("gulp-sass");
gulp.task("copy-html",function(){
	//完成复制文件的功能
	gulp.src("*.html") //来源
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\kongfuzi"))//目的地	
});
gulp.task("copy-css",function(){
	//完成复制文件的功能
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\kongfuzi\\css"));	
});

gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\kongfuzi\\js"));//目的地	
});
gulp.task("copy-images",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\kongfuzi\\img"));//目的地	
});
gulp.task("sass",function(){
    gulp.src("*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
})
gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("js/**/*",["copy-js"]);
    gulp.watch("img/**/*",["copy-images"]);
	gulp.watch("*.scss",["sass"]);
})
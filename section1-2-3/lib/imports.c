#include <emscripten.h>
#include <stdio.h>

EM_JS(void,jsFunction,(int n),{
    console.log("Call from EM_JS: " + n);
});

int main(){
    printf("WASM ready - Testing with Emscripten HTML\n");

    // Call JS function
    emscripten_run_script("console.log('Hello from C!')");

    // Call JS function
    // emscripten_async_run_script("alert('Hello from C - ASYNC!')",3000);

    // Get return value from JS function - INT
    int jsVal = emscripten_run_script_int("getNum()");

    // Get return value from JS function - STR
    char* jsStrVal = emscripten_run_script_string("getStr()");

    printf("Value from getNum: %d\n", jsVal);
    printf("Value from getStr: %s\n", jsStrVal);

    // Execute EM_JS fn
    jsFunction(144);

    return 1;
}
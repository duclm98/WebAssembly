#include <stdio.h>
#include <string.h>

int main(){
    printf("WASM ready - Testing with Emscripten HTML\n");
    return 1;
}

int getNum(){
    return 10;
}

int getDoubleNum(int n){
    return n*2;
}

char* greet(char* name){
    char* greeting = "Hello ";
    strcat(greeting, name);
    return greeting;
}
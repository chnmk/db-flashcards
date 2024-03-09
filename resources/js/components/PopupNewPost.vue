<template>
    <div
        class="fixed inset-x-0 top-32 w-80 sm:w-120 h-96 mx-auto col-start-4 col-span-6 bg-slate-300 border-2 border-slate-500 rounded-md p-4 overflow-auto">
        <div>
            <h1 class="my-2 p-2 text-center hover:bg-slate-400 transition duration-300 ease-in-out">New Post</h1>
            <div class="my-2 p-2 hover:bg-slate-400 transition duration-300 ease-in-out">
                <div>Title:</div>
                <input type="text" required minlength="1" maxlength="64" size="20" />
            </div>
            <div class="my-2 p-2 hover:bg-slate-400 transition duration-300 ease-in-out">
                <div>Description:</div>
                <input type="text" required minlength="1" maxlength="64" size="20" />
            </div>
            <div class="my-2 p-2 hover:bg-slate-400 transition duration-300 ease-in-out">
                <div>Tags:</div>
                <input type="text" required minlength="1" maxlength="64" size="20" />
            </div>
            <div class="my-2 p-2 hover:bg-slate-400 transition duration-300 ease-in-out">
                <div>Category:</div>
                <input type="text" required minlength="1" maxlength="64" size="20" />
            </div>
            <div class="my-2 p-2 hover:bg-slate-400 transition duration-300 ease-in-out">
                <div>Entries:</div>
                <input type="text" required minlength="1" maxlength="64" size="20" />
            </div>
        </div>
    </div>
</template>

<script>
    import AspectRatio from "./carbon/AspectRatio.svelte";
</script>

<div class="container vvv">
    <AspectRatio ratio="16x9">
        <video
            src="/video/newport_video.mp4"
            autoplay
            muted
            playsinline
            loop
        ></video>
    </AspectRatio>
</div>
<style>
    .container {
        overflow: hidden;
    }
    video {
        width: 100%;
    }
</style>

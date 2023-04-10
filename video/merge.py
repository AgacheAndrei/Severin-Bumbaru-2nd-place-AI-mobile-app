from moviepy.editor import VideoFileClip, AudioFileClip, concatenate_videoclips
import os

# Get the desired video title
title = input("title:")

# Open the video and audio
video_clip = VideoFileClip(r"E:\_AI_SEVERIN\video\output_video_for_ocr.mp4")
audio_clip = AudioFileClip(r"E:\_AI_SEVERIN\video\output3.mp3")

# Concatenate the video clip with the audio clip
final_clip = video_clip.set_audio(audio_clip)

# Export the final video with audio
final_clip.write_videofile(title + ".mp4")
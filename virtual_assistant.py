import pyttsx3
import speech_recognition as sr
import webbrowser
import datetime
import wikipedia


## taking the commands and recognizing the command
def takeCommand():

    r= sr.Recognizer()

    with sr.Microphone() as source:
        print('Listening')

        ## after how much time of no-speech should they consider the speech complete
        r.pause_threshold = 0.7
        audio = r.listen(source)

        try:
            print("Recognizing...")

            Query = r.recognize_google(audio, language='en-in')

        except Exception as e:
            print(e)
            print("Come again?")
            return "None"

        return Query


## speech of the assistant
def speak(audio):
    
    ## intializing the module
    engine = pyttsx3.init()
    

    ## getting the voices property
    voices = engine.getProperty('voices')
    
    ## setting the voice property 
    engine.setProperty('voice', voices[0].id)
   

    ## says the command
    engine.say(audio)
    
    ## blocks while processing all the currently queued commands
    engine.runAndWait()


## to return the day
def tellDay():

    day = datetime.datetime.today().weekday() + 1

    Day_dict={1: 'Monday', 2: 'Tuesday'
              ,3: 'Wednesday', 4: 'Thursday'
              ,5: 'Friday', 6: 'Saturday'
              ,7: 'Sunday'}

    if day in Day_dict.keys():
        day_of_the_week = Day_dict[day]
        print(day_of_the_week)
        speak("It is "+ day_of_the_week)


## to return the time
def tellTime():
    time = str(datetime.datetime.now())

    print(time)
    hour = time[11:13]
    min = time[14:16]

    speak("The time is "+ hour +"Hours and "+ min + "Minutes")


def Hello():
    speak("hello sir I am your desktop assistant. Tell me how may I help you")



def Take_query():

    Hello()

    while(True):

        query = takeCommand().lower()

        if "open google" in query:
            speak("Opening Google")
            webbrowser.open("www.google.com")
            continue

        elif "open mozilla" in query:
            speak("Opening Mozilla")
            webbrowser.open("www.mozilla.com")
            continue

        elif "which day it is" in query:
            tellDay()
            continue

        elif "what time it is" in query:
            tellTime()
            continue

        elif "bye" in query:
            speak("Good bye sir.")
            exit()

        elif "from wikipedia" in query:
            speak("Checking wikipedia")
            query = query.replace("wikipedia", "")
            result = wikipedia.summary(query, sentences = 4)
            speak(result)

        elif "tell me your name" in query:
            speak("I am Batman. Your assistant")

if __name__ == '__main__':
    Take_query()




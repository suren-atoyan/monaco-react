/* eslint-disable */
import { rTabs } from 'utils';

const examples = {
  1: rTabs(`
    /* Using a single database query, find all the leads in
    the database that have the same email address as any
    of the leads being inserted or updated. */
    for (Lead lead : [SELECT Email FROM Lead WHERE Email IN :leadMap.KeySet()]) {
      Lead newLead = leadMap.get(lead.Email);
      newLead.Email.addError('A lead with this email address already exists.');
    }
  `),
  2: rTabs(`
    # Create a resource group.
    az group create --name myResourceGroup --location westeurope

    # Create a new virtual machine, this creates SSH keys if not present.
    az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --generate-ssh-keys
  `),
  3: rTabs(`
    rem *******Begin Comment**************
    rem This program starts the superapp batch program on the network,
    rem directs the output to a file, and displays the file
    rem in Notepad.
    rem *******End Comment**************
    @echo off
    if exist C:\output.txt goto EMPTYEXISTS
    setlocal
      path=g:\programs\superapp;%path%
      call superapp>C:\output.txt
    endlocal
    :EMPTYEXISTS
    start notepad c:\output.txt
  `),
  4: rTabs(`
    /* guuid.c - UUID functions
     *
     * Copyright (C) 2013-2015, 2017 Red Hat, Inc.
     *
     * This library is free software; you can redistribute it and/or modify
     * it under the terms of the GNU Lesser General Public License as
     * published by the Free Software Foundation; either version 2.1 of the
     * licence, or (at your option) any later version.
     *
     * This is distributed in the hope that it will be useful, but WITHOUT
     * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
     * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public
     * License for more details.
     *
     * You should have received a copy of the GNU Lesser General Public
     * License along with this library; if not, write to the Free Software
     * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301
     * USA.
     *
     * Authors: Marc-André Lureau <marcandre.lureau@redhat.com>
     */

    #include "config.h"
    #include <string.h>

    #include "gi18n.h"
    #include "gstrfuncs.h"
    #include "grand.h"
    #include "gmessages.h"
    #include "gchecksum.h"

    #include "guuid.h"

    typedef struct {
      guint8 bytes[16];
    } GUuid;

    /**
     * SECTION:uuid
     * @title: GUuid
     * @short_description: a universally unique identifier
     *
     * A UUID, or Universally unique identifier, is intended to uniquely
     * identify information in a distributed environment. For the
     * definition of UUID, see [RFC 4122](https://tools.ietf.org/html/rfc4122.html).
     *
     * The creation of UUIDs does not require a centralized authority.
     *
     * UUIDs are of relatively small size (128 bits, or 16 bytes). The
     * common string representation (ex:
     * 1d6c0810-2bd6-45f3-9890-0268422a6f14) needs 37 bytes.
     *
     * The UUID specification defines 5 versions, and calling
     * g_uuid_string_random() will generate a unique (or rather random)
     * UUID of the most common version, version 4.
     *
     * Since: 2.52
     */

    /*
     * g_uuid_to_string:
     * @uuid: a #GUuid
     *
     * Creates a string representation of @uuid, of the form
     * 06e023d5-86d8-420e-8103-383e4566087a (no braces nor urn:uuid:
     * prefix).
     *
     * Returns: (transfer full): A string that should be freed with g_free().
     * Since: STATIC
     */
    static gchar *
    g_uuid_to_string (const GUuid *uuid)
    {
      const guint8 *bytes;

      g_return_val_if_fail (uuid != NULL, NULL);

      bytes = uuid->bytes;

      return g_strdup_printf ("%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x"
                              "-%02x%02x%02x%02x%02x%02x",
                              bytes[0], bytes[1], bytes[2], bytes[3],
                              bytes[4], bytes[5], bytes[6], bytes[7],
                              bytes[8], bytes[9], bytes[10], bytes[11],
                              bytes[12], bytes[13], bytes[14], bytes[15]);
    }

    static gboolean
    uuid_parse_string (const gchar *str,
                       GUuid       *uuid)
    {
      GUuid tmp;
      guint8 *bytes = tmp.bytes;
      gint i, j, hi, lo;
      guint expected_len = 36;

      if (strlen (str) != expected_len)
        return FALSE;

      for (i = 0, j = 0; i < 16;)
        {
          if (j == 8 || j == 13 || j == 18 || j == 23)
            {
              if (str[j++] != '-')
                return FALSE;

              continue;
            }

          hi = g_ascii_xdigit_value (str[j++]);
          lo = g_ascii_xdigit_value (str[j++]);

          if (hi == -1 || lo == -1)
            return FALSE;

          bytes[i++] = hi << 8 | lo;
        }

      if (uuid != NULL)
        *uuid = tmp;

      return TRUE;
    }

    /**
     * g_uuid_string_is_valid:
     * @str: a string representing a UUID
     *
     * Parses the string @str and verify if it is a UUID.
     *
     * The function accepts the following syntax:
     *
     * - simple forms (e.g. \`f81d4fae-7dec-11d0-a765-00a0c91e6bf6\`)
     *
     * Note that hyphens are required within the UUID string itself,
     * as per the aforementioned RFC.
     *
     * Returns: %TRUE if @str is a valid UUID, %FALSE otherwise.
     * Since: 2.52
     */
    gboolean
    g_uuid_string_is_valid (const gchar *str)
    {
      g_return_val_if_fail (str != NULL, FALSE);

      return uuid_parse_string (str, NULL);
    }

    static void
    uuid_set_version (GUuid *uuid, guint version)
    {
      guint8 *bytes = uuid->bytes;

      /*
       * Set the four most significant bits (bits 12 through 15) of the
       * time_hi_and_version field to the 4-bit version number from
       * Section 4.1.3.
       */
      bytes[6] &= 0x0f;
      bytes[6] |= version << 4;
      /*
       * Set the two most significant bits (bits 6 and 7) of the
       * clock_seq_hi_and_reserved to zero and one, respectively.
       */
      bytes[8] &= 0x3f;
      bytes[8] |= 0x80;
    }

    /*
     * g_uuid_generate_v4:
     * @uuid: a #GUuid
     *
     * Generates a random UUID (RFC 4122 version 4).
     * Since: STATIC
     */
    static void
    g_uuid_generate_v4 (GUuid *uuid)
    {
      int i;
      guint8 *bytes;
      guint32 *ints;

      g_return_if_fail (uuid != NULL);

      bytes = uuid->bytes;
      ints = (guint32 *) bytes;
      for (i = 0; i < 4; i++)
        ints[i] = g_random_int ();

      uuid_set_version (uuid, 4);
    }

    /**
     * g_uuid_string_random:
     *
     * Generates a random UUID (RFC 4122 version 4) as a string.
     *
     * Returns: (transfer full): A string that should be freed with g_free().
     * Since: 2.52
     */
    gchar *
    g_uuid_string_random (void)
    {
      GUuid uuid;

      g_uuid_generate_v4 (&uuid);

      return g_uuid_to_string (&uuid);
    }
  `),
  5: rTabs(`
    (ns game-of-life
      "Conway's Game of Life, based on the work of
      Christophe Grand (http://clj-me.cgrand.net/2011/08/19/conways-game-of-life)
      and Laurent Petit (https://gist.github.com/1200343).")

    ;;; Core game of life's algorithm functions

    (defn neighbors
      "Given a cell's coordinates \`[x y]\`, returns the coordinates of its
      neighbors."
      [[x y]]
      (for [dx [-1 0 1]
            dy (if (zero? dx)
                 [-1 1]
                 [-1 0 1])]
        [(+ dx x) (+ dy y)]))

    (defn step
      "Given a set of living \`cells\`, computes the new set of living cells."
      [cells]
      (set (for [[cell n] (frequencies (mapcat neighbors cells))
                 :when (or (= n 3)
                           (and (= n 2)
                                (cells cell)))]
             cell)))

    ;;; Utility methods for displaying game on a text terminal

    (defn print-grid
      "Prints a \`grid\` of \`w\` columns and \`h\` rows, on *out*, representing a
      step in the game."
      [grid w h]
      (doseq [x (range (inc w))
              y (range (inc h))]
        (when (= y 0) (println))
        (print (if (grid [x y])
                 "[X]"
                 " . "))))

    (defn print-grids
      "Prints a sequence of \`grids\` of \`w\` columns and \`h\` rows on *out*,
      representing several steps."
      [grids w h]
      (doseq [grid grids]
        (print-grid grid w h)
        (println)))

    ;;; Launches an example grid

    (def grid
      "\`grid\` represents the initial set of living cells"
      #{[2 1] [2 2] [2 3]})

    (print-grids (take 3 (iterate step grid)) 5 5)
  `),
  6: rTabs(`
    """
    A CoffeeScript sample.
    """

    class Vehicle
      constructor: (@name) =>
      
      drive: () =>
        alert "Conducting #{@name}"

    class Car extends Vehicle
      drive: () =>
        alert "Driving #{@name}"

    c = new Car "Brandie"

    while notAtDestination()
      c.drive()

    raceVehicles = (new Car for i in [1..100])

    startRace = (vehicles) -> [vehicle.drive() for vehicle in vehicles]

    fancyRegExp = ///
      (\d+) # numbers
      (\w*) # letters
      $   # the end
    ///
  `),
  7: rTabs(`
    #include <iostream>
    #include <vector>

    std::vector<int> find_prime_factors(int n)
    {
      std::vector<int> result;
      for (int i = 2; i <= n; i++)
      {
        while (n % i == 0)
        {
          result.push_back(i);
          n = n/i;
        }
      }
      return result;
    }

    int main()
    {
      int n;
      std::cout << "Enter number\n";
      std::cin >> n;
      std::vector<int> prime_factors;
      prime_factors = find_prime_factors(n);
      std::cout << "Prime Factors of " << n << ":\n";
      for (int i = 0; i < prime_factors.size(); i++)
      {
        std::cout << prime_factors[i] << " ";
      }
      std::cout << "\n";
    }
  `),
  8: rTabs(`
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace VS
    {
      class Program
      {
        static void Main(string[] args)
        {
          ProcessStartInfo si = new ProcessStartInfo();
          float load= 3.2e02f;

          si.FileName = @"tools\\node.exe";
          si.Arguments = "tools\\simpleserver.js";

          Process.Start(si);
        }
      }
    }
  `),
  9: rTabs(`Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com`),
  10: rTabs(`
    @keyframes flip {
      from {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
        animation-timing-function: ease-out;
      }

      40% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -190deg);
        animation-timing-function: ease-out;
      }

      50% {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
          rotate3d(0, 1, 0, -170deg);
        animation-timing-function: ease-in;
      }

      80% {
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
          rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }

      to {
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
        animation-timing-function: ease-in;
      }
    }

    .animated.flip {
      backface-visibility: visible;
      animation-name: flip;
    }
  `),
  11: rTabs(`
    FROM ubuntu:18.04
    COPY . /app
    RUN make /app
    CMD python /app/app.py
  `),
  12: rTabs(`
    (* Sample F# application *)
    [<EntryPoint>]
    let main argv = 
        printfn "%A" argv
        System.Console.WriteLine("Hello from F#")
        0 // return an integer exit code

    //--------------------------------------------------------
  `),
  13: rTabs(`
    package main

    import (
      "fmt"
      "time"
    )

    func readword(ch chan string) {
      fmt.Println("Type a word, then hit Enter.")
      var word string
      fmt.Scanf("%s", &word)
      ch <- word
    }

    func timeout(t chan bool) {
      time.Sleep(5 * time.Second)
      t <- false
    }

    func main() {
      t := make(chan bool)
      go timeout(t)

      ch := make(chan string)
      go readword(ch)

      select {
      case word := <-ch:
          fmt.Println("Received", word)
      case <-t:
          fmt.Println("Timeout.")
      }
    }
  `),
  14: rTabs(`
    type Query {
      me: User!
      searchForLocation(byGPS: GPSInput, byAddress: AddressInput): LocationPagingConnection
    }

    type Mutation {
      addLocation(location: LocationInput): Location
      addReview(review: ReviewInput): Review
      addFavorite(locationId: ID!): Location
    }
  `),
  15: rTabs(`
    <div class="entry">
      <h1>{{title}}</h1>
      {{#if author}}
      <h2>{{author.firstName}} {{author.lastName}}</h2>
      {{else}}
      <h2>Unknown Author</h2>
      {{/if}}
      {{contentBody}}
    </div>

    {{#unless license}}
      <h3 class="warning">WARNING: This entry does not have a license!</h3>
    {{/unless}}

    <div class="footnotes">
      <ul>
        {{#each footnotes}}
        <li>{{this}}</li>
        {{/each}}
      </ul>
    </div>

    <h1>Comments</h1>

    <div id="comments">
      {{#each comments}}
      <h2><a href="/posts/{{../permalink}}#{{id}}">{{title}}</a></h2>
      <div>{{body}}</div>
      {{/each}}
    </div>
  `),
  16: rTabs(`
    <html>
      <head>
        <title>HTML Sample</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style type="text/css">
          h1 {
            color: #CCA3A3;
          }
        </style>
        <script type="text/javascript">
          alert("I am a sample...");
        </script>
      </head>
      <body>
        <h1>Heading No.1</h1>
        <input disabled type="button" value="Click me" />
      </body>
    </html>
  `),
  17: rTabs(`
    # Example of a .gitconfig file

    [core]
      repositoryformatversion = 0
      filemode = false
      bare = false
      logallrefupdates = true
      symlinks = false
      ignorecase = true
      hideDotFiles = dotGitOnly

    # Defines the master branch
    [branch "master"]
      remote = origin
      merge = refs/heads/master
  `),
  18: rTabs(`
    import java.util.ArrayList;
    import org.junit.Test;

    public class Example {
      @Test 
      public void method() {
        org.junit.Assert.assertTrue( "isEmpty", new ArrayList<Integer>().isEmpty());
      }
    
      @Test(timeout=100) public void infinity() {
        while(true);
      }
     }
  `),
  19: rTabs(`
    // @monaco-editor/react is Monaco editor wrapper for easy/one-line integration with React
    // applications without need of webpack (or other module bundler)
    // configuration files.

    import React, { useState } from "react";
    import ReactDOM from "react-dom";

    import Editor from "@monaco-editor/react";
    import examples from "./examples";

    function App() {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("javascript");
      const [isEditorReady, setIsEditorReady] = useState(false);

      function handleEditorDidMount() {
        setIsEditorReady(true);
      }

      function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
      }

      function toggleLanguage() {
        setLanguage(language === "javascript" ? "python" : "javascript");
      }

      return (
        <>
          <button onClick={toggleTheme} disabled={!isEditorReady}>
            Toggle theme
          </button>
          <button onClick={toggleLanguage} disabled={!isEditorReady}>
            Toggle language
          </button>

          <Editor
            height="90vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            value={examples[language]}
            editorDidMount={handleEditorDidMount}
            loading={"Loading..."}
          />
        </>
      );
    }

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
  `),
  20: rTabs(`
    {
      "port": 8080,
      "exclude_from_auth": [
        "/login",
        "/check_token",
        "/battles:get",
        "/team"
      ],
      "db": {
        "default_data": {
          "battles": [],
          "active_battle_id": null,
          "admin": {},
          "secret": "",
          "active_tokens": []
        },
        "path": ".db.json"
      },
      "default_salt_rounds": 10,
      "default_admin_password": "adminonaly",
      "uws_server": {
        "port": 9000,
        "action_types": {
          "BROADCAST": "BROADCAST",
          "CREATE_BATTLE": "CREATE_BATTLE",
          "SEND_CHALLENGE_ANSWER": "SEND_CHALLENGE_ANSWER",
          "CREATE_TEAM": "CREATE_TEAM",
          "DELETE_TEAM": "DELETE_TEAM",
          "START_BATTLE": "START_BATTLE",
          "FINISH_BATTLE": "FINISH_BATTLE",
          "DELETE_BATTLE": "DELETE_BATTLE"
        },
        "child_process_parameters": []
      },
      "http_error_messages": {
        "400": "Your request is bad, and you should feel bad.",
        "401": "I don't know who you are, but I'll find you and login you.",
        "403": "Here we store NASA top secret files, Forbidden.",
        "404": "Oops! You tried to get something that does not exist in this universe.",
        "406": "It's unacceptable!!! It's all over between us.",
        "408": "This request took a century to process and didn't even finished.",
        "500": "Our server is a little bit sad now, try again later.",
        "503": "Our server is too tired now, try again after a short break."
      },
      "general_error_messages": {
        "no_active": "No active battle.",
        "not_started": "Battle hasn't started yet.",
        "started": "Battle has already started.",
        "finished": "Battle has already finished.",
        "invalid_data": "Invalid Data.",
        "no_data": "Data is not passed.",
        "not_admin": "Our admin has all possible, 4 incredible and 2 impossible rights, but you aren't our admin.",
        "challenge_not_started": "Can't submit unbegun battle challenges.",
        "admin_challenge": "Admin can't solve challenges.",
        "already_solved": "This challenge has already been solved by your team.",
        "better_solution": "The previous vesrion of your team is better.",
        "no_challenge": "There is no challenge mentioned by you!",
        "auth_fail": "Authentication failed.",
        "short_password": "Password should be at least 6 chars long."
      }
    }
  `),
  21: rTabs(`
    class MutableStack<E>(vararg items: E) {              // 1

      private val elements = items.toMutableList()

      fun push(element: E) = elements.add(element)        // 2

      fun peek(): E = elements.last()                     // 3

      fun pop(): E = elements.removeAt(elements.size - 1)

      fun isEmpty() = elements.isEmpty()

      fun size() = elements.size

      override fun toString() = "MutableStack($\{elements.joinToString()\})"
    }
  `),
  22: rTabs(`
    @base: #f938ab;

    .box-shadow(@style, @c) when (iscolor(@c)) {
      border-radius: @style @c;
    }

    .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }

    .box { 
      color: saturate(@base, 5%);
      border-color: lighten(@base, 30%);
      
      div {
        .box-shadow((0 0 5px), 30%);
      }
    }

    #header {
      h1 {
        font-size: 26px;
        font-weight: bold;
      }
      
      p { font-size: 12px;
        a { text-decoration: none;
          &:hover { border-width: 1px }
        }
      }
    }
  `),
  23: rTabs(`
    -- defines a factorial function
    function fact (n)
      if n == 0 then
        return 1
      else
        return n * fact(n-1)
      end
    end
    
    print("enter a number:")
    a = io.read("*number")        -- read a number
    print(fact(a))
  `),
  24: rTabs(`
    ## Primes

    It's a playground for examining and playing with prime numbers. It also gives an opportunity to write custom formulas and visualize the results.

    ### Demo

    You can try it simply by opening this [link](https://primes.surenatoyan.com/)

    ### Development

    You also can set up it on your local machine for development (or other) purposes. For that you need:

     - [Nodejs](https://nodejs.org/en/)
     - npm (it comes with nodejs) - or [yarn](https://yarnpkg.com/en/)

    Run these commands to clone the repository, install dependencies and run the application.

    1) \`git clone https://github.com/SurenAt93/primes.git\`
    2) \`cd primes\`
    3) \`npm install\` (or if you are using yarn, just \`yarn\`)
    4) \`npm run start\` (or \`yarn start\` in case of yarn)

    That's it. After, open \`localhost:3000\` in your browser.
    Note that by these steps you run the application in development mode. So, you can open the source of it in your preferred text editor and do whatever you want.

    To make a production build after the third step run - \`npm run build\` (or \`yarn build\` in case of yarn). After a successful build, you will have a production ready app in the build folder.

    ## License

    [MIT](./LICENSE)
  `),
  25: ` = CALCULATE(SUM(Sales[SalesAmount]), PREVIOUSQUARTER(Calendar[DateKey]))`,
  26: rTabs(`
    CREATE TABLE shop (
      article INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL,
      dealer  CHAR(20)                 DEFAULT ''     NOT NULL,
      price   DOUBLE(16,2)             DEFAULT '0.00' NOT NULL,
      PRIMARY KEY(article, dealer));
    INSERT INTO shop VALUES
      (1,'A',3.45),(1,'B',3.99),(2,'A',10.99),(3,'B',1.45),
      (3,'C',1.69),(3,'D',1.25),(4,'D',19.95);
  `),
  27: rTabs(`
    #import 

    int foo() {
      int a = 3 // exists in this function only
      int b = 2 // exists in this function only
      return c + d;
    }

    int main (int argc, const char * argv[]) {
      NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

      result = foo();
      NSLog(@"a = %i", b); // illegal code
      
      [pool drain];

      return 0;
    }
  `),
  28: rTabs(`
    program factorial;

    function fact(n: integer): longint;
    begin
      if (n = 0) then
        fact := 1
      else
        fact := n * fact(n - 1);
    end;

    var
      n: integer;

    begin
      for n := 0 to 16 do
          writeln(n, '! = ', fact(n));
    end.
  `),
  29: rTabs(`
    #!/usr/bin/perl
    use strict;
    use warnings;

    use Path::Tiny;

    my $dir = path('foo','bar'); # foo/bar

    # Iterate over the content of foo/bar
    my $iter = $dir->iterator;
    while (my $file = $iter->()) {

      # See if it is a directory and skip
      next if $file->is_dir();

      # Print out the file name and path
      print "$file\n";
    }
  `),
  30: rTabs(`
    BEGIN
      SELECT * INTO STRICT myrec FROM emp WHERE empname = myname;
      EXCEPTION
        WHEN NO_DATA_FOUND THEN
          RAISE EXCEPTION 'employee % not found', myname;
        WHEN TOO_MANY_ROWS THEN
          RAISE EXCEPTION 'employee % not unique', myname;
    END;
  `),
  31: rTabs(`
    <!DOCTYPE html>
    <html>
    <body>

    <h1>PHP example</h1>

    <?php
      echo "Hello World!";
    ?>

    </body>
    </html>
  `),
  32: rTabs(`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus aliquet sapien, sed rhoncus leo ullamcorper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus feugiat eleifend nisl, aliquet rhoncus quam scelerisque vel. Morbi eu pellentesque ex. Nam suscipit maximus leo blandit cursus. Aenean sollicitudin nisi luctus, ornare nibh viverra, laoreet ex. Donec eget nibh sit amet dolor ornare elementum. Morbi sollicitudin enim vitae risus pretium vestibulum. Ut pretium hendrerit libero, non vulputate ante volutpat et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam malesuada turpis vitae est porttitor, id tincidunt neque dignissim. Integer rhoncus vestibulum justo in iaculis. Praesent nec augue ut dui scelerisque gravida vel id velit. Donec vehicula feugiat mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Praesent diam lorem, luctus quis ullamcorper non, consequat quis orci. Ut vel massa vel nunc sagittis porttitor a vitae ante. Quisque euismod lobortis imperdiet. Vestibulum tincidunt vehicula posuere. Nulla facilisi. Donec sodales imperdiet risus id ullamcorper. Nulla luctus orci tortor, vitae tincidunt urna aliquet nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat dapibus massa. Sed ac pharetra magna, in imperdiet neque. Nullam nunc nisi, consequat vel nunc et, sagittis aliquam arcu. Aliquam non orci magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id sem ut sem pulvinar rhoncus. Aenean venenatis nunc eget mi ornare, vitae maximus lacus varius. Quisque quis vestibulum justo.

    Donec euismod luctus volutpat. Donec sed lacinia enim. Vivamus aliquam elit cursus, convallis diam at, volutpat turpis. Sed lacinia nisl in auctor dapibus. Nunc turpis mi, mattis ut rhoncus id, lacinia sed lectus. Donec sodales tellus quis libero gravida pretium et quis magna. Etiam ultricies mollis purus, eget consequat velit. Duis vitae nibh vitae arcu tincidunt congue. Maecenas ut velit in ipsum condimentum dictum quis eget urna. Sed mattis nulla arcu, vitae mattis ligula dictum at.
  `),
  33: rTabs(`
    // http://www.ats-lang.org/
    (* Say Hello! once *)
    val () = print"Hello!\n"
    //
    (* Say Hello! 3 times *)
    val () = 3*delay(print"Hello!")
    val () = print_newline((*void*))
    //

    //
    (* Build a list of 3 *)
    val xs = $list{int}(0, 1, 2)
    //
    val x0 = xs[0] // legal
    val x1 = xs[1] // legal
    val x2 = xs[2] // legal
    val x3 = xs[3] // illegal
  `),
  34: rTabs(`
    let
      Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
      SplitColumnDelimiter = Table.SplitColumn(Source,"Input",Splitter.SplitTextByDelimiter(","),13),
      Unpivot = Table.Unpivot(SplitColumnDelimiter,{"Input.1", "Input.2", "Input.3", "Input.4",
      "Input.5", "Input.6",    "Input.7", "Input.8", "Input.9", "Input.10", "Input.11", "Input.12"
      ,  "Input.13"},"Attribute","Value"),
      RemovedColumns = Table.RemoveColumns(Unpivot,{"Attribute"}),
      DuplicatesRemoved = Table.Distinct(RemovedColumns),
      GroupedRows = Table.Group(DuplicatesRemoved, {"RowID"}, {{"Count of Distinct Values"
      , each Table.RowCount(_), type number}})
    in
      GroupedRows
  `),
  35: rTabs(`
    # Convert any text file to ASCII
 
    param( [string] $infile = $(throw "Please specify a filename.") )
     
    $outfile = "$infile.ascii"
     
    get-content -path $infile | out-file $outfile -encoding ascii
  `),
  36: rTabs(`
    doctype 5
    html(lang="en")
      head
        title= pageTitle
        script(type='text/javascript')
          if (foo) {
            bar()
          }
      body
        // Disclaimer: You will need to turn insertSpaces to true in order for the
          syntax highlighting to kick in properly (especially for comments)
          Enjoy :)
        h1 Pug - node template engine
        #container
          if youAreUsingPug
            p You are amazing
          else
            p Get on it!
  `),
  37: rTabs(`
    # Python program to check if the number provided by the user is an Armstrong number or not
    # take input from the user
    num = int(input("Enter a number: "))
    # initialize sum
    sum = 0
    # find the sum of the cube of each digit
    temp = num
    while temp > 0:
       digit = temp % 10
       sum += digit ** 3
       temp //= 10
    # display the result
    if num == sum:
       print(num,"is an Armstrong number")
    else:
       print(num,"is not an Armstrong number")
  `),
  38: rTabs(`
    # Program to convert decimal number into binary number using recursive function
    convert_to_binary <- function(n) {
      if(n > 1) {
        convert_to_binary(as.integer(n/2))
      }
      cat(n %% 2)
    }
  `),
  39: rTabs(`
    @{
      var total = 0;
      var totalMessage = "";
      @* a multiline
        razor comment embedded in csharp *@
      if (IsPost) {
        // Retrieve the numbers that the user entered.
        var num1 = Request["text1"];
        var num2 = Request["text2"];

        // Convert the entered strings into integers numbers and add.
        total = num1.AsInt() + num2.AsInt();
      <italic><bold>totalMessage = "Total = " + total;</bold></italic>
      }
    }

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Add Numbers</title>
        <meta charset="utf-8" />
      </head>
    <body>
      <p>Enter two whole numbers and then click <strong>Add</strong>.</p>
      <form action="" method="post">
        <p><label for="text1">First Number:</label>
          <input type="text" name="text1" />
        </p>
        <p><label for="text2">Second Number:</label>
          <input type="text" name="text2" />
        </p>
        <p><input type="submit" value="Add" /></p>
      </form>

      @* now we call the totalMessage method 
         (a multi line razor comment outside code) *@

      <p>@totalMessage</p>
      
      <p>@(totalMessage+"!")</p>
      
      An email address (with escaped at character): name@@domain.com
     
    </body>
    </html>
  `),
  40: rTabs(`
    EXISTS xkey
    APPEND xkey "Hello"
    APPEND xkey " World"
    GET xkey
  `),
  41: rTabs(`
    create view tables_vw as
    select distinct(id) table_id
    ,trim(datname)   db_name
    ,trim(nspname)   schema_name
    ,trim(relname)   table_name
    from stv_tbl_perm
    join pg_class on pg_class.oid = stv_tbl_perm.id
    join pg_namespace on pg_namespace.oid = relnamespace
    join pg_database on pg_database.oid = stv_tbl_perm.db_id;
  `),
  42: rTabs(`
    def find_missing(sequence)
      consecutive     = sequence.each_cons(2)
      differences     = consecutive.map { |a,b| b - a }
      sequence        = differences.max_by { |n| differences.count(n) }
      missing_between = consecutive.find { |a,b| (b - a) != sequence }
      missing_between.first + sequence
    end
    find_missing([2,4,6,10])
    # 8
  `),
  43: rTabs(`
    struct Sheep { naked: bool, name: &'static str }

    trait Animal {
      // Static method signature; \`Self\` refers to the implementor type.
      fn new(name: &'static str) -> Self;

      // Instance method signatures; these will return a string.
      fn name(&self) -> &'static str;
      fn noise(&self) -> &'static str;

      // Traits can provide default method definitions.
      fn talk(&self) {
        println!("{} says {}", self.name(), self.noise());
      }
    }

    impl Sheep {
      fn is_naked(&self) -> bool {
        self.naked
      }

      fn shear(&mut self) {
        if self.is_naked() {
          // Implementor methods can use the implementor's trait methods.
          println!("{} is already naked...", self.name());
        } else {
          println!("{} gets a haircut!", self.name);

          self.naked = true;
        }
      }
    }

    // Implement the \`Animal\` trait for \`Sheep\`.
    impl Animal for Sheep {
      // \`Self\` is the implementor type: \`Sheep\`.
      fn new(name: &'static str) -> Sheep {
        Sheep { name: name, naked: false }
      }

      fn name(&self) -> &'static str {
        self.name
      }

      fn noise(&self) -> &'static str {
        if self.is_naked() {
          "baaaaah?"
        } else {
          "baaaaah!"
        }
      }
      
      // Default trait methods can be overridden.
      fn talk(&self) {
        // For example, we can add some quiet contemplation.
        println!("{} pauses briefly... {}", self.name, self.noise());
      }
    }

    fn main() {
      // Type annotation is necessary in this case.
      let mut dolly: Sheep = Animal::new("Dolly");
      // TODO ^ Try removing the type annotations.

      dolly.talk();
      dolly.shear();
      dolly.talk();
    }
  `),
  44: rTabs(`
    begin:
    TextWindow.Write("Enter a number: ")
    num = TextWindow.ReadNumber()
    remainder = Math.Remainder(num, 2)
    If (remainder = 0) Then
     TextWindow.WriteLine("The number is Even")
    Else
     TextWindow.WriteLine("The number is Odd")
    EndIf
    Goto begin
  `),
  45: rTabs(`
    ;;; make-matrix creates a matrix (a vector of vectors).
    (define make-matrix
      (lambda (rows columns)
        (do ((m (make-vector rows))
             (i 0 (+ i 1)))
            ((= i rows) m)
            (vector-set! m i (make-vector columns)))))

    ;;; matrix? checks to see if its argument is a matrix.
    ;;; It isn't foolproof, but it's generally good enough.
    (define matrix?
      (lambda (x)
        (and (vector? x)
             (> (vector-length x) 0)
             (vector? (vector-ref x 0)))))

    ;; matrix-rows returns the number of rows in a matrix.
    (define matrix-rows
       (lambda (x)
          (vector-length x)))

    ;; matrix-columns returns the number of columns in a matrix.
    (define matrix-columns
       (lambda (x)
          (vector-length (vector-ref x 0))))

    ;;; matrix-ref returns the jth element of the ith row.
    (define matrix-ref
      (lambda (m i j)
        (vector-ref (vector-ref m i) j)))

    ;;; matrix-set! changes the jth element of the ith row.
    (define matrix-set!
      (lambda (m i j x)
        (vector-set! (vector-ref m i) j x)))

    ;;; mul is the generic matrix/scalar multiplication procedure
    (define mul
      (lambda (x y)
        ;; mat-sca-mul multiplies a matrix by a scalar.
        (define mat-sca-mul
           (lambda (m x)
              (let* ((nr (matrix-rows m))
                     (nc (matrix-columns m))
                     (r  (make-matrix nr nc)))
                 (do ((i 0 (+ i 1)))
                     ((= i nr) r)
                     (do ((j 0 (+ j 1)))
                         ((= j nc))
                         (matrix-set! r i j
                            (* x (matrix-ref m i j))))))))

        ;; mat-mat-mul multiplies one matrix by another, after verifying
        ;; that the first matrix has as many columns as the second
        ;; matrix has rows.
        (define mat-mat-mul
           (lambda (m1 m2)
              (let* ((nr1 (matrix-rows m1))
                     (nr2 (matrix-rows m2))
                     (nc2 (matrix-columns m2))
                     (r   (make-matrix nr1 nc2)))
                 (if (not (= (matrix-columns m1) nr2))
                     (match-error m1 m2))
                 (do ((i 0 (+ i 1)))
                     ((= i nr1) r)
                     (do ((j 0 (+ j 1)))
                         ((= j nc2))
                         (do ((k 0 (+ k 1))
                              (a 0
                                 (+ a
                                    (* (matrix-ref m1 i k)
                                       (matrix-ref m2 k j)))))
                             ((= k nr2)
                              (matrix-set! r i j a))))))))

       ;; type-error is called to complain when mul receives an invalid
       ;; type of argument.
        (define type-error
           (lambda (what)
              (error 'mul
                 "~s is not a number or matrix"
                 what)))

        ;; match-error is called to complain when mul receives a pair of
        ;; incompatible arguments.
        (define match-error
           (lambda (what1 what2)
              (error 'mul
                 "~s and ~s are incompatible operands"
                 what1
                 what2)))

        ;; body of mul; dispatch based on input types
        (cond
          ((number? x)
           (cond
             ((number? y) (* x y))
             ((matrix? y) (mat-sca-mul y x))
             (else (type-error y))))
          ((matrix? x)
           (cond
             ((number? y) (mat-sca-mul x y))
             ((matrix? y) (mat-mat-mul x y))
             (else (type-error y))))
          (else (type-error x)))))
  `),
  46: rTabs(`
    $baseFontSizeInPixels: 14;

    @function px2em ($font_size, $base_font_size: $baseFontSizeInPixels) {  
      @return ($font_size / $base_font_size) + em; 
    }

    h1 {
      font-size: px2em(36, $baseFontSizeInPixels);
    }
    h2  {
      font-size: px2em(28, $baseFontSizeInPixels);
    }
    .class {
      font-size: px2em(14, $baseFontSizeInPixels);
    }

    nav {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li { display: inline-block; }

      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
      
      @each $animal in puma, sea-slug, egret, salamander {
        .#{$animal}-icon {
          background-image: url('/images/#{$animal}.png');
        }
      }
    }
  `),
  47: rTabs(`
    #!/usr/bin/env bash
    #
    # Turn the single document bible into a book separated by chapters.

    main() {
        rm -rf manuscript
        mkdir -p manuscript

        # Split the README.md into chapters based on markers.
        while IFS=$'\n' read -r line; do
            [[ "$chap" ]] && chapter[$i]+="$line"$'\n'
            [[ "$line" == "<!-- CHAPTER START -->" ]] && chap=1
            [[ "$line" == "<!-- CHAPTER END -->" ]]   && { chap=; ((i++)); }
        done < README.md

        # Write the chapters to separate files.
        for i in "$\{!chapter[@]\}"; do
            : "$\{chapter[$i]/$'\n'*\}"; : "$\{_/\# \}"; : "$\{_,,\}"
            printf '%s\n' "$\{chapter[$i]\}" > "manuscript/chapter$\{i\}.txt"
            printf '%s\n' "chapter$\{i\}.txt" >> "manuscript/Book.txt"
        done
    }

    main
  `),
  48: rTabs(`
    #ifndef EXAMPLES_ASSERT_HPP
    #define EXAMPLES_ASSERT_HPP

    # define m_assert(condition, message)
      do {
        if (! (condition)) {
          std::cerr << "Assertion \`" #condition "\` failed in " << __FILE__
                    << " line " << __LINE__ << ": " << message << std::endl;
          std::terminate();
        }
      } while (false)

    # define c_assert(condition)
        do {
          if (! (condition)) {
            std::cerr << "Assertion \`" #condition "\` failed in " << __FILE__
                      << " line " << __LINE__ << std::endl;
            std::terminate();
          }
        } while (false)
    #else
    #   define m_assert(condition, message) do { if (false) { (void)(condition); (void)sizeof(message); } } while (false)
    #   define c_assert(condition) do { if (false) { (void)(condition); } } while (false)
    #endif

    #endif // EXAMPLES_ASSERT_HPP
  `),
  49: rTabs(`
    CREATE VIEW Failing_Students AS
    SELECT S_NAME, Student_ID
    FROM STUDENT
    WHERE GPA > 40;
  `),
  50: rTabs(`
    FUNCTION_BLOCK SubFB
    VAR_INPUT
    TimeIN : BOOL; (* Boolean input variable *)
    TimeQ : BOOL; (* Boolean input variable *)
    END_VAR
    VAR_IN_OUT
    Timer : TON; (* pointer to instance Time1 of TON – input/output variable *)
    END_VAR
    VAR_OUTPUT
    Time3 : TON; (* 3rd instance of TON *)
    END_VAR
    VAR
    Start : BOOL := TRUE; (* local Boolean variable *)
    END_VAR
  `),
  51: rTabs(`
    if let bestPlayer = players.highestScoringPlayer() {
      recordHolder = """
        The record holder is \(bestPlayer.name),\
        with a high score of \(bestPlayer.highScore)!
      """
    } else {
      recordHolder = "No games have been played yet.")
    }
    print(recordHolder)
    // The record holder is Erin, with a high score of 271!

    let highestScore = players.highestScoringPlayer()?.highScore ?? 0
    // highestScore == 271
  `),
  52: rTabs(`
    #!/usr/bin/tclsh

    set variableA 10
    set {variable B} test
    puts $variableA
    puts $\{variable B\}
  `),
  53: rTabs(`
    import * as React from 'react';
    import { StandardProps } from '..';
    import { TypographyProps } from '../Typography';

    export interface ListItemTextProps
      extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ListItemTextClassKey> {
      disableTypography?: boolean;
      inset?: boolean;
      primary?: React.ReactNode;
      primaryTypographyProps?: Partial<TypographyProps>;
      secondary?: React.ReactNode;
      secondaryTypographyProps?: Partial<TypographyProps>;
    }

    export type ListItemTextClassKey =
      | 'root'
      | 'multiline'
      | 'dense'
      | 'inset'
      | 'primary'
      | 'secondary';

    declare const ListItemText: React.ComponentType<ListItemTextProps>;

    export default ListItemText;
  `),
  54: rTabs(`
    Imports System
    Imports System.Collections.Generic

    Module Module1

        Sub Main()
            Dim a As New M8Ball

            Do While True

                Dim q As String = ""
                Console.Write("ask me about the future... ")
                q = Console.ReadLine()

                If q.Trim <> "" Then
                    Console.WriteLine("the answer is... {0}", a.getAnswer(q))
                Else
                    Exit Do
                End If
            Loop

        End Sub

    End Module
  `),
  55: rTabs(`
    <?xml version="1.0" encoding="ISO-8859-1"?>  
    <note>  
      <to>Tove</to>  
      <from>Jani</from>  
      <heading>Reminder</heading>  
      <body>Don't forget me this weekend!</body>  
    </note>
  `),
  56: rTabs(`
    %TAG ! tag:clarkevans.com,2002:
    --- !shape
      # Use the ! handle for presenting
      # tag:clarkevans.com,2002:circle
    - !circle
      center: &ORIGIN {x: 73, y: 129}
      radius: 7
    - !line
      start: *ORIGIN
      finish: { x: 89, y: 102 }
    - !label
      start: *ORIGIN
      color: 0xFFEEBB
      text: Pretty vector drawing.
  `),
};

export default examples;

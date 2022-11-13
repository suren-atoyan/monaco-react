/* eslint-disable */
import { rTabs } from 'utils';

const examples = {
  1: rTabs(`
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
  2: rTabs(`
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
  3: rTabs(`
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
  4: rTabs(`
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
  5: rTabs(`
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
  6: rTabs(`
    // the code example from https://github.com/suren-atoyan/state-local

    import { compose, curry, isFunction } from '../utils';
    import validators from '../validators';
    
    function create(initial, handler = {}) {
      validators.initial(initial);
      validators.handler(handler);
    
      const state = { current: initial };
    
      const didUpdate = curry(didStateUpdate)(state, handler);
      const update = curry(updateState)(state);
      const validate = curry(validators.changes)(initial);
      const getChanges = curry(extractChanges)(state);
    
      function getState(selector = state => state) {
        validators.selector(selector);
        return selector(state.current);
      }
    
      function setState(causedChanges) {
        compose(
          didUpdate,
          update,
          validate,
          getChanges,
        )(causedChanges);
      }
    
      return [getState, setState];
    }
    
    function extractChanges(state, causedChanges) {
      return isFunction(causedChanges)
        ? causedChanges(state.current)
        : causedChanges;
    }
    
    function updateState(state, changes) {
      state.current = { ...state.current, ...changes };
    
      return changes;
    }
    
    function didStateUpdate(state, handler, changes) {
      isFunction(handler)
        ? handler(state.current)
        : Object.keys(changes)
            .forEach(field => handler[field]?.(state.current[field]));
    
      return changes;
    }
    
    export { create };   
  `),
  7: rTabs(`
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
  8: rTabs(`
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
  9: rTabs(`
    # Program to convert decimal number into binary number using recursive function
    convert_to_binary <- function(n) {
      if(n > 1) {
        convert_to_binary(as.integer(n/2))
      }
      cat(n %% 2)
    }
  `),
};

export default examples;
